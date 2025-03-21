function CharacterList() {
    return (
        <div className="row">
            {[...Array(6)].map((_, index) => (
                <div className="col-md-4 mb-3" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Character {index + 1}</h5>
                            <p className="card-text">Some details about this character.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CharacterList;
