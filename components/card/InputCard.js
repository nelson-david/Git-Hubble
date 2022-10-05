import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

const InputCard = () => {

    const [githubUsername, setGithubUsername] = useState("");

    const searchUser = (e) => {
        e.preventDefault();
        console.log("Username: ", githubUsername);
        router.push(`/user?id=${githubUsername}`)
    }

    return(
        <div className="landingCard">
            <div className="text-center">
                <Image
                    src="https://res.cloudinary.com/iodiary/image/upload/v1664900349/githubble/github_1_rjzdou.svg"
                    width={80}
                    height={80}
                />
            </div><br />
            <h1 className="headerTitle">Find Your <span>Githubble</span></h1>
            <div className="formInputCard">
                <form onSubmit={searchUser}>
                    <input
                        className="form-control customInput"
                        type="text"
                        required={true}
                        value={githubUsername}
                        onChange={(e) => setGithubUsername(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default InputCard;