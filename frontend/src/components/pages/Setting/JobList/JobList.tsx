import type { FC } from 'react'

import {
  Col,
  ColGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@/components/ui/Table'

import styles from './JobList.css'

export const JobList: FC = () => {
  return (
    <div className={styles.container}>
      <TableContainer>
        <Table>
          <ColGroup>
            <Col width={300} />
            <Col width={150} />
            <Col width={100} />
          </ColGroup>
          <TableHead>
            <TableRow>
              <TableCell>名称</TableCell>
              <TableCell>単価</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>AAA</TableCell>
              <TableCell>AAAAA</TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>BBB</TableCell>
              <TableCell>BBBBB</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
