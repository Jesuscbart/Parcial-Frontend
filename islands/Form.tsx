import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";


export const Form: FunctionComponent = () => {

    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const submitHandler = async (
        e: JSX.TargetedEvent<HTMLFormElement, Event>,
    ) => {
        e.preventDefault();
        const errorMsg: string[] = [];

        if (name === "" || email === "") {
            errorMsg.push("Invalid contact. A field is empty, email is invalid, or the email is already in use.")
        }

        if (errorMsg.length > 0) setError(errorMsg.join(" | "));
        else {
            setError("");
            e.currentTarget.submit();
        }
    };

    /*
    const emailExists = async (email:string): Promise<boolean> => {
        try{
            const res = await fetch
        }

    }
    */

    return (
        <div class="agendaForm">
            <h2>Add new contact</h2>
            <form 
                action="/"
                method = "POST"
                onSubmit={submitHandler}>
                
                <div>
                    <label for = "name"> Name </label>
                </div>

                <div>
                    <input
                        onFocus={(e) => setError("")}
                        onInput={(e) => setName(e.currentTarget.value)}
                        type = "text"
                        id = "name"
                        name = "name"
                    />
                </div>

                <div>
                    <label for = "email"> Email </label>
                </div>

                <div>
                    <input 
                        onFocus={(e) => setError("")}
                        onInput={(e) => setEmail(e.currentTarget.value)}
                        /*
                        onBlur={async (e) => {
                            if (await emailExists)
                        }}
                        */
                        type = "email"
                        id = "email"
                        name = "email"
                    />
                </div>

                <div>
                    <button 
                        type="submit"
                        disabled={error !== ""}
                        class="btn"
                    >
                    Add contact     
                    </button>
                </div>

                {error !== "" && <div class="span-2 error">{error}</div>}

            </form>
        </div>
    );
};

export default Form;