import { useEffect } from "react";

declare global {
  interface Window {
    kakao?: KakaoNamespace;
  }
}

interface KakaoNamespace {
  maps: KakaoMaps;
}

interface KakaoMaps {
  load: (callback: () => void) => void;
  LatLng: new (lat: number, lng: number) => KakaoLatLng;
  Map: new (container: HTMLElement, options: KakaoMapOptions) => KakaoMap;
  Marker: new (options: KakaoMarkerOptions) => KakaoMarker;
}

interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

interface KakaoMapOptions {
  center: KakaoLatLng;
  level: number;
}

interface KakaoMap {
  setCenter: (latlng: KakaoLatLng) => void;
}

interface KakaoMarkerOptions {
  position: KakaoLatLng;
}

interface KakaoMarker {
  setMap: (map: KakaoMap) => void;
}

const KakaoMapComponent = () => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      initializeMap();
      return;
    }

    const existingScript = document.getElementById("kakao-map-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "kakao-map-script";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          initializeMap();
        });
      }
    };

    document.head.appendChild(script);
  }, []);

  const initializeMap = () => {
    const container = document.getElementById("map");
    if (!container || !window.kakao) return;

    const options: KakaoMapOptions = {
      center: new window.kakao.maps.LatLng(37.502219, 126.881847),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const markerPosition = new window.kakao.maps.LatLng(37.502219, 126.881847);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden" id="map" />
  );
};

export default KakaoMapComponent;
