const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className="rounded bg-indigo-500 text-white p-4 w-full">Pilih pokemon</button>
    )
}
const Title = ({title}) => {
    return (
        <p className="font-bold text-xl mb-2 text-center">{title}</p>
    )
}
const Image = ({url}) => {
    return (
        <img className="my-4 mx-auto h-64" src={url} alt=""/>
    )
}

const ChosenOneTitle = () => {
    return (
        <h2 className="font-bold text-xl mb-2 text-center">Sang Terpilih</h2>
    )
}

export default Button
export { Title, Image, ChosenOneTitle }

