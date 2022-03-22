import "./styles.css";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px",
        alignItems: "baseLine",
      }}
    >
      {/* company name/logo */}

      <div>
        <h3>Company Name</h3>
      </div>
      {/* pages */}

      <div className="categories">
        <h4>New Arrivals</h4>
        <h4>Designers</h4>
        <h4>The Edit</h4>
        <h4>Clothes</h4>
        <h4>Kids</h4>
      </div>

      {/* user Login */}

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23px"
          height="13px"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23px"
          height="13px"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23px"
          height="13px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  );
}
