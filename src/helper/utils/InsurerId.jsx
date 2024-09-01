import { useSelector } from 'react-redux';

const useInsurerId = () => {

    const { insurerData } = useSelector(state => state.filterStateValue);

    const insurerId = selectedOption => {
        const selectedInsurerId = insurerData.find(item => item.insurer_name === selectedOption);

        if (selectedInsurerId) return selectedInsurerId.insurer_id
        else return ''

    };

    return insurerId;
};

export default useInsurerId;