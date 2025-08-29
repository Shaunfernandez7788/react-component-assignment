# React UI Component Library Assignment

This project is a submission for a front-end development assignment. It features two core UI components, an `InputField` and a `DataTable`, built with React, TypeScript, and TailwindCSS, and documented with Storybook.

---

### **Live Preview**

**[➡️ View the deployed Storybook here]([https://68b14bdab4fbd39573794cd9-hgumxezbed.chromatic.com/])**

*(Note: This link will be generated in the final deployment step.)*

---

### **Tech Stack**

* **Framework:** React 18
* **Language:** TypeScript
* **Styling:** TailwindCSS v3
* **Component Documentation:** Storybook
* **Build Tool:** Vite
* **Testing:** Vitest & React Testing Library

---

### **Getting Started**

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Shaunfernandez7788/react-component-assignment.git](https://github.com/Shaunfernandez7788/react-component-assignment.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd react-component-assignment
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view a demo of the components.

5.  **Run Storybook:**
    ```sh
    npm run storybook
    ```
    Open [http://localhost:6006](http://localhost:6006) to view the interactive component library.

6.  **Run tests:**
    ```sh
    npm run test
    ```

---

### **Description of Approach**

My approach was to build the components in a structured and scalable manner, focusing on clean code and modern development practices.

* **`InputField` Component:** I created a flexible and reusable input component that supports multiple variants (`outlined`, `filled`, `ghost`), sizes, and states (`invalid`, `disabled`). To keep the component's logic clean, the styling variations were managed in a separate `styles.ts` file.

* **`DataTable` Component:** For this more complex component, I implemented features like column sorting and multi-row selection using React hooks (`useState`, `useMemo`, `useEffect`) for efficient state management. The component also handles `loading` and `empty` states to provide a better user experience.

* **Problem-Solving:** The development process involved significant troubleshooting of environmental and tooling issues, particularly with dependency resolution (Vite, PostCSS) and version incompatibilities (React 19, TailwindCSS v4). I systematically debugged these challenges by creating a fresh project, downgrading dependencies to stable versions, and implementing manual workarounds for broken CLI commands. This experience reinforced the importance of maintaining a stable and predictable development environment.
