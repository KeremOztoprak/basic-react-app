const Create = () => {
    return (
        <div className="create">
            <h2 style={{ color: '#ff793f' }}>Yeni Yazı Ekle</h2>
            <form>
                <label>Yazı Başlık:</label>
                <input type="text" required />
                <label>Yazı Aciklama:</label>
                <textarea required>

                </textarea>
                <label>Yazar:</label>
                <select>
                    <option value="Bugs Bunny">Bugs Bunny</option>
                    <option value="Sylvester">Sylvester</option>
                    <option value="Snoopy">Snoopy</option>
                    <option value="Scooby-Doo">Scooby-Doo</option>
                </select>
                <button>Ekle</button>
            </form>
        </div>
    );

}
export default Create;