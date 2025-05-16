import ControlledForm from "../components/controlledForm/controlledForm";
import UncontrolledForm from "../components/uncontrolledForm/uncontrolledForm";

export default function FormsPage() {
    return (
        <main>
            <h4>Forms page</h4>

            <ControlledForm></ControlledForm>
            <UncontrolledForm></UncontrolledForm>
        </main>
    )
}
