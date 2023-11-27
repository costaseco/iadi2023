import { ReactNode } from 'react'

interface BannerProps {
    title: string
}
export const Banner = ({ title }: BannerProps) => <div>{ title }</div>

const headerStyle = { backgroundColor: 'lightblue', padding: '10px' }
export const Header = (props: { title:string, children: ReactNode }) =>
    <header style={headerStyle}>
        <Banner title={props.title}/>
        {props.children}
    </header>

export const Container = (props: { children?: ReactNode }) => <div>{ props.children }</div>
export const Footer = () => <footer></footer>