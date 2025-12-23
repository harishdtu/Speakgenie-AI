import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-4 pb-6">

      {/* ================= Stories ================= */}
      <section>
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold">Stories for You</h3>
          <span className="text-green-600 text-sm">Show all →</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          <StoryCard
            img="/story.jpg"
            title="Choosing the Right Path"
            onClick={() => navigate("/player")}
          />
          <StoryCard
            img="/thumb.jpg"
            title="The Fountain and the Mayor"
            onClick={() => navigate("/player")}
          />
          <StoryCard
            img="/story.jpg"
            title="The Lesson"
            onClick={() => navigate("/player")}
          />
        </div>
      </section>

      {/* ================= Practice with Humans ================= */}
      <section className="mt-8">
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold">📞 Practice with Humans</h3>
          <span className="text-green-600 text-sm">Show all →</span>
        </div>

        <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/humans.png"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 p-4 h-full flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold">Favorite Animals</h4>
              <p className="text-white/80 text-xs">
                Talk about your favorite animals and pets
              </p>
            </div>

            <button className="mx-auto px-8 py-2 bg-white rounded-full text-green-600 font-semibold shadow-lg">
              Join & Start Call
            </button>
          </div>
        </div>
      </section>

      {/* ================= Practice with AI ================= */}
      <section className="mt-10">
        <div className="flex justify-between mb-3">
          <h3 className="font-semibold">🤖 Practice with AI</h3>
          <span className="text-green-600 text-sm">Show all →</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6">
          <AiCard img="/doramon.png" title="Talk with Doraemon" />
          <AiCard img="/spiderman.png" title="Talk with Spider Man" />
        </div>
      </section>

    </div>
  );
}

/* ================= Components ================= */

function StoryCard({ img, title, onClick }: any) {
  return (
    <div onClick={onClick} className="w-[150px] cursor-pointer">
      <div className="bg-white rounded-2xl p-3 shadow-md hover:scale-95 transition">
        <img
          src={img}
          className="h-28 w-full object-cover rounded-xl"
        />
      </div>
      <p className="mt-2 text-xs text-center font-semibold text-gray-900">
        {title}
      </p>
    </div>
  );
}

function AiCard({ img, title }: any) {
  return (
    <div className="w-[150px] flex-shrink-0 rounded-2xl bg-white p-4 text-center shadow-md border border-green-100">

      {/* Image Box */}
      <div className="h-[110px] w-full flex items-center justify-center rounded-xl bg-green-50">
        <img
          src={img}
          alt={title}
          className="h-[90px] w-auto object-contain"
        />
      </div>

      {/* Title */}
      <p className="mt-3 text-xs font-semibold text-gray-900">
        {title}
      </p>
    </div>
  );
}
