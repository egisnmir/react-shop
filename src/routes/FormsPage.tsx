import ControlledForm from "../components/controlledForm/controlledForm";
import UncontrolledForm from "../components/uncontrolledForm/uncontrolledForm";

export default function FormsPage() {
    return (
        <main>
            <h4>Forms page</h4>

            <div style={{display: 'flex'}}>
                <ControlledForm></ControlledForm>
                <UncontrolledForm></UncontrolledForm>
            </div>
        </main>
    )
}
