import { getDndBoardData } from 'api';
import Column from 'components/Column/Column';
import ColumnsWrapper from 'components/ColumnsWrapper/ColumnsWrapper';
import { initialBoardData } from 'initialData';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage<any> = ({ response }) => {

  return (
    <ColumnsWrapper>
      <Column />
    </ColumnsWrapper>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: response }: any = await getDndBoardData();
  console.log(response[0].columns);

  return {
    props: {
      response,
      initialState: {
        board: { status: 'idle', error: null, data: response[0].columns }
      }
    }
  };
};
