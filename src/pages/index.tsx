import Column from 'components/Column/Column';
import ColumnsWrapper from 'components/ColumnsWrapper/ColumnsWrapper';
import { initialBoardData } from 'initialData';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <ColumnsWrapper>
      <Column />
    </ColumnsWrapper>

  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      initialState: {
        board: { status: 'idle', error: null, data: initialBoardData }
      }
    }
  };
};
