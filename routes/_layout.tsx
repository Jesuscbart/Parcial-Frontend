import { FreshContext } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";
import Form from "../islands/Form.tsx"

const Layout = async (req: Request, ctx: FreshContext) => {
    const Component = ctx.Component;
    const route = ctx.route;
    
    const page = route.split("/").pop();

    const selected = page === "" ? "client" : "server";

    return (
        <>
        <Menu selected={selected} />
        <h1>My agenda</h1>



        </>
    );
};

export default Layout;