import { useHistory } from 'react-router-dom';


export default function Home(){
    const navigation = useHistory();

    function contador() {
        navigation.push('/contador')
    }

    function compras() {
        navigation.push('/compras')
    }

    return(
        <div className="Home">
            <h1> Escolha para onde você quer ir </h1>

            <div className="home-buttons">
                <button onClick={compras}>Compras</button>
                <button onClick={contador}>Contador</button> 
            </div>
        </div>
    )
}