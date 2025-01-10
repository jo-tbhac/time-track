import type { ComponentProps, FC, ReactNode } from 'react'

import styles from './Table.css'

interface TableContainerProps {
  children?: ReactNode
  className?: string
}

interface TableProps {
  children?: ReactNode
  className?: string
}

interface TableHeadProps {
  children?: ReactNode
}

interface TableBodyProps {
  children?: ReactNode
}

interface TableRowProps {
  children?: ReactNode
}

interface TableCellProps {
  children?: ReactNode
}

interface ColGroupProps {
  children?: ReactNode
}

interface ColProps {
  width?: ComponentProps<'col'>['width']
}

export const TableContainer: FC<TableContainerProps> = ({ children, className }) => {
  const classNames = [styles.tableContainer, className].join(' ')

  return <div className={classNames}>{children}</div>
}

export const Table: FC<TableProps> = ({ children, className }) => {
  const classNames = [styles.table, className].join(' ')

  return <table className={classNames}>{children}</table>
}

export const TableHead: FC<TableHeadProps> = ({ children }) => {
  return <thead className={styles.tableHead}>{children}</thead>
}

export const TableBody: FC<TableBodyProps> = ({ children }) => {
  return <tbody className={styles.tableBody}>{children}</tbody>
}

export const TableRow: FC<TableRowProps> = ({ children }) => {
  return <tr className={styles.tableRow}>{children}</tr>
}

export const TableCell: FC<TableCellProps> = ({ children }) => {
  return <td className={styles.tableCell}>{children}</td>
}

export const ColGroup: FC<ColGroupProps> = ({ children }) => {
  return <colgroup>{children}</colgroup>
}

export const Col: FC<ColProps> = ({ width }) => {
  return <col width={width} />
}
