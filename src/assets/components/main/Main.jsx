import mainStyles from "./Main.module.scss";
import { useState, useRef } from "react";

const Main = () => {
    const [titles, setTitles] = useState([]);
    const titleRef = useRef();

    const titleSubmit = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        if (title) {
            setTitles(array => ([...array, title]));
            titleRef.current.value = "";
        }
    }

    const deleteTitle = (index) => {
        setTitles(array => array.filter((t, i) => i !== index));
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <label htmlFor="title" className={mainStyles.viola}>
                            <h3>Titolo del post</h3>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Inserisci il titolo del post"
                            ref={titleRef}
                        />
                        <button onClick={titleSubmit}>Invia</button>
                    </div>

                    <div className="col-12">
                        <h3 className={mainStyles.viola}>Titoli salvati</h3>
                        {titles.map((title, index) => (
                            <div key={index}>
                                <h3>{title}</h3>
                                <button onClick={() => deleteTitle(index)}>Cancella</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
