export default {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    t1: state => state.tab1,
    t2: state => state.tab2,
    t3: state => state.tab3,
    t4: state => state.tab4,
    t5: state => state.tab5,
}