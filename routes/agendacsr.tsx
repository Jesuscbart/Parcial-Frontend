import { Handlers, FreshContext, PageProps, FreshConfig } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";
import Form from "../islands/Form.tsx"
import { Contact } from "../types.ts"
import AgendaCSR from "../islands/Contactos.tsx"


export const handler: Handlers = {
    GET: (_req: Request, ctx: FreshContext<unknown, Contact>) => {
      const {name, email} = ctx.params;
  
      return ctx.render({name, email});
    }
  
  };
  
  
  const Page = (props: PageProps<Contact>) => {
    const {name, email} = props.data;
    
    return (
      <div>
        {name},
        {email}
      </div>
    );
  };
  
  export default Page;
  

  /*
  const Page = () => <AgendaCSR />;

  export default Page;
  */
