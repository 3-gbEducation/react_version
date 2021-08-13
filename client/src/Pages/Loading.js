import { Dimmer, Loader } from "semantic-ui-react";

export default function LoadingComponent(){
    return(
        <div>
            <Dimmer active inverted>
                <Loader>
                    Loading...
                </Loader>
            </Dimmer>
        </div>
    )
}