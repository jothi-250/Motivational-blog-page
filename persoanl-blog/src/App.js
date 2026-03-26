import BlogCard from "./components/BlogCard";

function App() {

  const blogs = [
    {
      id: 1,
      title: "The 5AM Club",
      description: "How a simple good book changed has made life more succesful."
    },
    {
      id: 2,
      title: "The Power of Journaling",
      description: "How writing down our daily tasks help us."
    },
    {
      id: 3,
      title: "Facing My Fears",
      description: "Stepping out of comfort zone helped me grow stronger."
    },
    {
      id: 4,
      title: "Learning Daily",
      description: "Even 30 minutes of learning can change your future."
    },
    {
      id: 5,
      title: "Time Management",
      description: "Planning your day improves productivity."
    },
    {
      id: 6,
      title: "Self Discipline",
      description: "Discipline helps even when motivation is low."
    },
    {
      id: 7,
      title: "Positive Thinking",
      description: "A positive mindset opens new opportunities."
    },
    {
      id: 8,
      title: "Avoid Procrastination",
      description: "Start now instead of delaying tasks."
    },
    {
      id: 9,
      title: "Build Confidence",
      description: "Confidence grows with small achievements."
    },
    {
      id: 10,
      title: "Self Reflection",
      description: "Learning from mistakes helps personal growth."
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#708090",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >

      {/* HEADING */}
      <h1 style={{ marginBottom: "30px", color: "#F5F5F5" }}>
        Personal Development Zone 📝
      </h1>

      {/* BLOG GRID */}
      <div
        style={{
          width: "70%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // 👉 2 per row
          columnGap: "20px",
          rowGap:"30px",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>

    </div>
  );
}

export default App;