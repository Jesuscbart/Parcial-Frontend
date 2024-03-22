import { FunctionComponent } from "preact";

type MenuProps = {
    selected: "client" | "server";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return (
        <div class = "menu">
            <a href="/agendacsr" class={selected === "client" ? "selected": ""}>
                Agenda Client Side
            </a>
            <a href="/agendassr" class={selected === "server" ? "selected": ""}>
                Agenda Server Side
            </a>
        </div>
    );
};

export default Menu;