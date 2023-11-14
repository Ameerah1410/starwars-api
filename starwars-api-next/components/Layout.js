const Layout = ({ children }) => (
  // Overall layout structure
  <div>
    <div className="container">
      {/* Header section */}
      <header className="header">
        <h1>Films</h1>
      </header>

      {/* Main content area */}
      <main className="main">{children}</main>

      {/* Footer section */}
      <footer className="footer">&copy; 2023 Star Wars</footer>
    </div>

    {/* Styling for the layout using JSX-style */}
    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #333;
        background-image: url("../static/starwars-header.jpg");
        background-size: cover;
        background-position: center;
        color: black;
        padding: 10px;
        text-align: right;
      }
      .main {
        padding: 20px;
      }
      .footer {
        background-color: black;
        color: white;
        padding: 10px;
        text-align: center;
        background-image: url("../static/background.jpg");
        background-size: cover;
      }
    `}</style>
  </div>
);

export default Layout;
