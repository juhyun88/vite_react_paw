import { supabase } from "../../../lib/supabaseClient";
import { useEffect, useState } from "react";

interface Inquiry {
  id: number;
  category: string;
  title: string;
  author: string;
  password: string;
  content: string;
  answer?: string | null;
  is_answered: boolean;
  created_at: string;
}

export default function Inquire({ className }: { className: string }) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [viewPassword, setViewPassword] = useState("");
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [form, setForm] = useState({
    category: "장례 서비스",
    title: "",
    author: "",
    password: "",
    content: "",
  });

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setInquiries(data || []);
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from("inquiries").insert([form]);
    if (!error) {
      setForm({
        category: "장례 서비스",
        title: "",
        author: "",
        password: "",
        content: "",
      });
      setIsModalOpen(false);
      fetchData();
    }
  };

const handleOpenDetail = (item: Inquiry) => {
  setSelectedInquiry(item);
  setIsDetailOpen(true);
  setViewPassword("");
  setIsPasswordVerified(!item.password); // 비밀번호가 없으면 바로 열람 허용
};

const handlePasswordCheck = () => {
  if (selectedInquiry?.password === viewPassword) {
    setIsPasswordVerified(true); // ✅ 비밀번호 확인 성공
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={className}>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-4">
          문의하신 내용에 대한 답변을 확인하실 수 있습니다.
        </h1>

        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">NO.</th>
              <th className="p-2 border">기관</th>
              <th className="p-2 border">제목</th>
              <th className="p-2 border">이름</th>
              <th className="p-2 border">답변</th>
              <th className="p-2 border">등록일</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item, idx) => (
              <tr
                key={item.id}
                className="text-center border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => handleOpenDetail(item)}
              >
                <td className="p-2 border">{idx + 1}</td>
                <td className="p-2 border">{item.category}</td>
                <td className="p-2 border text-left">
                        {item.password ? "🔒 " : ""}
                        {item.title}</td>
                <td className="p-2 border">{item.author.slice(0, 1)}**</td>
                <td className="p-2 border">
                  {item.is_answered ? "답변완료" : ""}
                </td>
                <td className="p-2 border">{item.created_at?.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-right">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            글쓰기
          </button>
        </div>

        {/* 글쓰기 모달 */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">글쓰기</h2>
              <div className="grid grid-cols-1 gap-3 mb-2">
                <select
                  className="border p-2"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option>장례 서비스</option>
                  <option>부가서비스</option>
                  <option>펫로스서비스</option>
                  <option>사후조치</option>
                  <option>기타</option>
                </select>
                <input
                  className="border p-2"
                  placeholder="제목"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                />
                <input
                  className="border p-2"
                  placeholder="이름"
                  value={form.author}
                  onChange={(e) =>
                    setForm({ ...form, author: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="border p-2"
                  placeholder="비밀번호"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <textarea
                  className="border p-2 h-24"
                  placeholder="내용"
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  닫기
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  작성하기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 상세보기 모달 */}
        {isDetailOpen && selectedInquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
               {isPasswordVerified ? (
                <>
                  <h2 className="text-lg font-bold mb-2">{selectedInquiry.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {selectedInquiry.created_at.split("T")[0]} | {selectedInquiry.category}
                  </p>
                  <p className="mb-4 whitespace-pre-wrap">{selectedInquiry.content}</p>
                  {selectedInquiry.is_answered && selectedInquiry.answer && (
                    <div className="p-3 border-t mt-4">
                      <h3 className="font-semibold mb-1">답변</h3>
                      <p className="text-gray-700 whitespace-pre-wrap">
                        {selectedInquiry.answer}
                      </p>
                    </div>
                  )}
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => setIsDetailOpen(false)}
                      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      닫기
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-2">비밀번호를 입력해주세요.</p>
                  <input
                    type="password"
                    className="border p-2 w-full"
                    value={viewPassword}
                    onChange={(e) => setViewPassword(e.target.value)}
                  />
                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => setIsDetailOpen(false)}
                      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      닫기
                    </button>
                    <button
                      onClick={handlePasswordCheck}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      확인
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
