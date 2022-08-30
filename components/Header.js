import { ConnectButton } from "web3uikit"
import { Sandbox } from "@web3uikit/icons"
export default function Header() {
    return (
        <div className="p-5 font-bold border-b-2 flex flex-row items-center bg-white">
            <Sandbox fontSize="50px" />
            <h1 className="py-4 px-4 font-blod text-3xl">Decentralized Web3 Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
