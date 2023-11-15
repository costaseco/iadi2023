import { useSelectorUser } from '../State'

export const Navigation = (props: { menuItems: string[] }) =>
    <div>
        {props.menuItems.join(" | ")}
    </div>

export const Login = () => {

    const username = useSelectorUser()

    const logout = <div>Hello {username} <button>Logout</button></div>
    const login = <div>username: <input type="text" />
        password: <input type="text" />
        <button>Sign in</button>
    </div>

    return username ? logout : login
}
