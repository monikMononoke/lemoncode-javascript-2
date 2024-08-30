import React from 'react';
import { AppLayout } from '@/layouts';
import { MovementListHeaderComponent } from './components';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { MovementListVm } from './movement-list.vm';
import classes from './movement-list.page.module.css';
import { useParams } from 'react-router-dom';
import { getMovementList } from './api/movement-list.api';
import { mapMovementListFromApiToVm } from './movement-list.mapper';

export const MovementListPage: React.FC = () => {
  const { id } = useParams();

  const [movementList, setMovementList] = React.useState<MovementListVm[]>([]);

  React.useEffect(() => {
    if (id && typeof id === 'string') {
      getMovementList(id).then((data) =>
        setMovementList(mapMovementListFromApiToVm(data))
      );
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
