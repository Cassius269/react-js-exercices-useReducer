function Subscription(){
    return (
        <section className="mt-5 mb-5">
            <h3 className="text-center">Exercice 2 : formulaire d'inscription multi-étapes</h3>
            <form action="#" method="POST" className="mt-5 w-50 m-auto p-3 rounded-3">
                <div>
                    <label htmlFor="username" className="form-label">pseudo</label>
                    <input type="text" name="username" id="username" className="form-control" />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email"  className="form-control"/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">mot de passe</label>
                    <input type="password" name="password" id="password"  className="form-control"/>
                </div>
                <div>
                    <label htmlFor="confirm_password" className="form-label">mot de passe de confirmation</label>
                    <input type="confirm_password" name="confirm_password" id="confirm_password"  className="form-control"/>
                </div>
                <div>
                    <label htmlFor="adresse" className="form-label">adresse</label>
                    <input type="text" name="adresse" id="adresse" className="form-control" />
                </div>
                <fieldset className="form-check">
                    <legend>Choisissez les caractéristiques de votre monstre&nbsp;:</legend>
                    <div>
                        <label htmlFor="foot">Foot</label>
                        <input type="checkbox" name="foot" id="foot" />
                    </div>
                    <div>
                        <label htmlFor="basket">Basket</label>
                        <input type="checkbox" name="basket" id="basket" />
                    </div>
                </fieldset>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-secondary">Soumettre</button>
                </div>
            </form>
        </section>
    )
}

export default Subscription;