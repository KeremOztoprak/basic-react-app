import { useState } from "react";

const Create = () => {

    const [baslik, setBaslik] = useState('');
    const [Aciklama, setAciklama] = useState('');
    const [yazar, setYazar] = useState('');

    const [yukleniyor, setYukleniyor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setYukleniyor(true);
        const yazi = { ad: baslik, Aciklama, yazar };

        fetch('http://localhost:8000/yazilar/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(yazi)
        }).then(() => {
            console.log('yazı eklendi');
            setYukleniyor(false);
        })
    }

    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}>Yeni Yazı Ekle</h2>
            <form onSubmit={handleSubmit}>
                <label>Yazı Başlık:</label>
                <input type="text" required value={baslik} onChange={(e) => setBaslik(e.target.value)} />
                <label>Yazı Aciklama:</label>
                <textarea required value={Aciklama} onChange={(e) => setAciklama(e.target.value)}>

                </textarea>
                <label>Yazar:</label>
                <select value={yazar} onChange={(e) => setYazar(e.target.value)} >
                    <option value="Bugs Bunny">Bugs Bunny</option>
                    <option value="Sylvester">Sylvester</option>
                    <option value="Snoopy">Snoopy</option>
                    <option value="Scooby-Doo">Scooby-Doo</option>
                </select>
                {!yukleniyor && <button>Ekle</button>}
                {yukleniyor && <button disabled >Yükleniyor...</button>}
            </form>
        </div>
    );

}
export default Create;