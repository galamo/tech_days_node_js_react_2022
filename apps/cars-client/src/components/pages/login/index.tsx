import { useEffect, useState } from "react";
import { HeaderApp } from "../../ui-components/header";
import axios from "axios"
import { Spinner } from "../../ui-components/spinner";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:3500/auth/login"
export function LoginPage() {

    // const [ state,setState ] = useState("initialState")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("No token")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    async function loginAction() {
        try {
            setIsLoading(true)
            const result = await axios.post(baseUrl, { userName, password })
            console.log(result.data)
            setToken(result?.data?.token)
        } catch (ex: any) {
            alert(ex.message)
        } finally {
            setIsLoading(false)
            navigate("/cars")
        }
    }

    useEffect(() => {
        return () => {
            console.log("Login page unmount")
        };
    }, []);


    return <div>
        <HeaderApp title={"Login"} />
        <div className="container">
            <div className="row">
                <form >
                    <div className="form-group">
                        <label >user name {userName}</label>
                        <input value={userName} onChange={(e) => { setUserName(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button onClick={loginAction} type="button" className="btn btn-primary">Submit</button>

                </form>

            </div>
        </div>
        {isLoading ? <Spinner /> : <div style={{ width: "500px", overflow: "auto" }}> token: {token} </div>}
    </div>
}