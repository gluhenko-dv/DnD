import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { dateNow, getBoardData } from 'helpers/helpers';
import { updateBoardData } from 'store/Board/BoardSlice';
import './ItemAddBtn.styles.scss';

const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ItemAddBtnProps extends PropsFromRedux {
    index: number;
}

const ItemAddBtn: React.FC<ItemAddBtnProps> = ({ index, updateBoardData }) => {
    const onClick = useCallback(() => {
        const data = getBoardData()
        if (data.length === 0) {
            return;
        }
        data[index].items.splice(data[index].items.length, 0, {
            id: dateNow(),
            title: 'Новое'
        });
        updateBoardData(data);
    }, []);

    return (
        <button onClick={onClick} className="item-add-btn">
            добавить
        </button>
    );
};

export default connector(ItemAddBtn);
