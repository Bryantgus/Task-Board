import "./Header.css"

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="title">
                <div src="Logo.webp" alt="Logo" />
                <h1>My Task Board</h1>
                <div src="Edit_duotone.webp" alt="" />
            </div>
            <p>Tasks to keep organised</p>
        </div>
    )
}