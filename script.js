document.addEventListener("DOMContentLoaded", () => {
  // --- AUTHENTICATION ---
  const authPage = document.getElementById("authPage");
  const mainPage = document.getElementById("mainPage");
  const authButton = document.getElementById("authButton");
  const toggleAuth = document.getElementById("toggleAuth");
  const authTitle = document.getElementById("authTitle");
  const logoutBtn = document.getElementById("logoutBtn");
  let isLogin = true;

  toggleAuth.onclick = () => {
    isLogin = !isLogin;
    authTitle.textContent = isLogin ? "Login" : "Sign Up";
    authButton.textContent = isLogin ? "Login" : "Sign Up";
    toggleAuth.textContent = isLogin
      ? "Don’t have an account? Sign up"
      : "Already have an account? Login";
  };

  authButton.onclick = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) return alert("Please fill all fields!");

    // Successful login
    authPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    mainPage.style.display = "flex"; // Use flex as defined in new CSS
    authPage.style.display = "none";
  };
  
  logoutBtn.onclick = () => {
    // Successful logout
    authPage.classList.remove("hidden");
    mainPage.classList.add("hidden");
    mainPage.style.display = "none";
    authPage.style.display = "flex";
    // Reset to home
    showSection("home");
  };

  // --- SPA NAVIGATION ---
  const sections = {
    home: document.getElementById("homeSection"),
    profile: document.getElementById("profileSection"),
    about: document.getElementById("aboutSection"),
    contact: document.getElementById("contactSection"),
  };
  
  const navLinks = {
    home: document.getElementById("homeNav"),
    profile: document.getElementById("profileNav"),
    about: document.getElementById("aboutNav"),
    contact: document.getElementById("contactNav"),
  }

  function showSection(sectionId) {
    // Hide all sections
    Object.values(sections).forEach((sec) => sec.classList.add("hidden"));
    // Show the target section
    if (sections[sectionId]) {
      sections[sectionId].classList.remove("hidden");
    }

    // Update active nav link
    Object.values(navLinks).forEach((a) => a.classList.remove("active"));
    if(navLinks[sectionId]) {
        navLinks[sectionId].classList.add("active");
    }
  }

  navLinks.home.onclick = () => showSection("home");
  navLinks.profile.onclick = () => showSection("profile");
  navLinks.about.onclick = () => showSection("about");
  navLinks.contact.onclick = () => showSection("contact");

  // PROFILE ICON opens profile
  document.getElementById("profileIcon").onclick = () => showSection("profile");

  // --- BORROW MODAL ---
  const borrowModal = document.getElementById("borrowModal");
  const borrowBtn = document.getElementById("borrowBtn");
  const closeModal = document.getElementById("closeModal");
  const borrowForm = document.getElementById("borrowForm");

  borrowBtn.onclick = () => {
    borrowModal.classList.remove("hidden");
  };

  closeModal.onclick = () => {
    borrowModal.classList.add("hidden");
  };

  // Close modal if backdrop is clicked
  borrowModal.onclick = (e) => {
    if (e.target === borrowModal) {
      borrowModal.classList.add("hidden");
    }
  };
  
  // LEND BUTTON
  const lendBtn = document.getElementById("lendBtn");
  lendBtn.onclick = () => {
    alert("Feature coming soon: View and manage your lending portfolio!");
  };

  // SUBMIT BORROW FORM
  window.submitBorrowForm = () => {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const reason = document.getElementById("reason").value;

    if (!name || !amount || !reason)
      return alert("Please fill all details!");

    alert(`Borrow request for ₹${amount} submitted successfully!\nName: ${name}`);
    // Assuming 'borrowForm' is the ID of the form inside the modal
    document.querySelector("#borrowModal .form-section").reset();
    borrowModal.classList.add("hidden");
  };

  // --- PROFILE TABS ---
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;

      // Update tab link active state
      tabLinks.forEach((link) => link.classList.remove("active"));
      tab.classList.add("active");

      // Show/hide tab content
      tabContents.forEach((content) => {
        if (content.id === targetTab) {
          content.classList.remove("hidden");
          content.classList.add("active");
        } else {
          content.classList.add("hidden");
          content.classList.remove("active");
        }
      });
    });
  });
  
 
});