export const Error = ({children}) =>{

    return (
        <div className="alert alert-danger text-center">
            <h2>{children}</h2>
        </div>
    )
};