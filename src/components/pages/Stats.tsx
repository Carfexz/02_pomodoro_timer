import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { userSlice } from "../../store/reducers/UserSlice";
import Button from "../ui/Button/Button";
import Layout from "./Layout/Layout";

const Stats = () => {
    const { count } = useAppSelector(state => state.userReducer)
    const { increment, decrement } = userSlice.actions;
    const dispatch = useAppDispatch()
    return (
        <Layout isHeader={true} isFooter={true}>
            <div>
                <h1>
                    {count}
                </h1>
                <Button onClick={() => dispatch(increment(1))} text={'increment'} />
                <Button onClick={() => dispatch(decrement(2))} text={'decrement'} />
            </div>
        </Layout>

    )
}

export default Stats;