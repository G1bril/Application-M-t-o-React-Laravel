const Contact = () => {
    return (
        <div className="white-box">
            <h1>Contact</h1>
            <form>
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Votre email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Votre message"></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;
