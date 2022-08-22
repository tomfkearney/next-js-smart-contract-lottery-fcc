import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-8 flex flex-row">
            {" "}
            <h1 className="py-4 px-4 font-blog text-3xl"> Lottery </h1>
            <div className="ml-auto py-4 py-4" />
            <ConnectButton moralisAuth={false}></ConnectButton>
        </div>
    )
}
