import React from "react";

const sidebarStyle = {
  height: "100vh",
  width: "3rem",
  backgroundColor: "#e0e0e0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "fixed",
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div className="my-3 text-center" style={{ color: "#d32f2f" }}>
        <i className="fas fa-gem"></i>
      </div>

      <div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i className="far fa-clock"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i className="fas fa-home"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="fas fa-user-friends"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="far fa-comment-alt"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="far fa-credit-card"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="fas fa-store"></i>
        </div>
      </div>

      <div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="fas fa-cog"></i>
        </div>
        <div className="my-3 text-center" style={{ color: "#9e9e9e" }}>
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
