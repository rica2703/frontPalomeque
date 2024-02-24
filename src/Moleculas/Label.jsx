function Label({title, text}) {
    return (
        <>
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        margin: "0 auto",
                        marginLeft: "160px",
                    }}

                >
                    {title}
                </h1>

            </div>
            <div>
                <h1
                    style={{
                        textAlign: "center",
                        color: "#426B1F",
                        marginLeft: "6%"
                    }}
                >
                    {text}
                </h1>
            </div>
        </>
    );
}

export default Label;