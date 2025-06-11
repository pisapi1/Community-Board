import "./App.css";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="App">
      <h1>Career Prep</h1>
      <Page 
        title="Interview Prep"
        cards={[
          {title: "Behavioral answers", details: "Use STAR for stories"},
          {title: "Technical questions", details: "Practice coding and logic"},
          {title: "Mock sessions", details: "Simulate real interviews"}
        ]}
      />

      <Page 
        title="Resume Tips"
        cards={[
          {title: "Tailor to job", details: "Match skills to the job post"},
          {title: "Quantify results", details: "Show impact with numbers"},
          {title: "Keep it to 1 page", details: "Stay concise and focused"}
        ]}
      />

      <Page 
        title="Networking"
        cards={[
          {title: "Elevator pitch", details: "Summarize you in 30 seconds"},
          {title: "LinkedIn profile", details: "Keep it polished and active"},
          {title: "Follow-up emails", details: "Thank contacts after chats"}
        ]}
      />
      <Page
        title = "Public Speaking"
        cards={[
          {title: "Confidence", details: "Smile! Stand right! It's showtime!"},
          {title: "Eye Contact", details: "Maintain eye contact throughout the conversation"}
        ]} 
      />
    </div>
  )
}

export default App;