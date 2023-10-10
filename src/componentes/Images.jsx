export default function Images() {
    return(
        <>
            <section>
                <figure>
                    <img 
                        src="https://picsum.photos/400/400?2"
                        className="img-thumbnail"
                        alt=""/>
                </figure>

                <br></br>

                <figure>
                    <img 
                        src="https://picsum.photos/400/400/?3"
                        className="rounded float-start img-fluid"
                        alt=""/>

                    <img 
                        src="https://picsum.photos/400/400/?4"
                        className="" 
                        alt=""/>
                </figure>    
            </section>
        </>
    );
}