import { createTheme, Theme } from '@mui/material/styles';
import { csCZ } from '@mui/x-data-grid-premium/locales';
import type {} from '@mui/x-data-grid-premium/themeAugmentation';

const theme: Theme = createTheme(
  {
    typography: {
      fontSize: 14,
      fontFamily: 'Roboto Condensed',
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            '& .MuiDataGrid-footerContainer': {
              minHeight: '32px',
              border: '0',
            },
            '& .MuiDataGrid-row.Mui-selected': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
            '& .MuiDataGrid-row.Mui-hovered': {
              backgroundColor: 'rgba(9,234,135,0.8)',
            },
            '& .MuiDataGrid-row.Mui-focused': {
              backgroundColor: 'rgba(255,60,143,0.73)',
            },
            '& .MuiDataGrid-row.Mui-selected.Mui-hovered': {
              backgroundColor: 'rgba(44,44,44,0.4)',
            },
            '& .MuiDataGrid-editInputCell>.MuiInputBase-input': {
              paddingLeft: '9px',
            },
            '& .MuiDataGrid-cell.MuiDataGrid-cell--editing': {
              paddingTop: '0px',
            },
            '& .MuiDataGrid-columnHeader': {
              // currently unused, changed to container--top
              backgroundColor: 'rgb(69,153,236)',
              color: 'white',
            },
            '& .MuiDataGrid-withBorderColor.MuiDataGrid-withBorderColor': {
              borderColor: 'rgba(44, 44, 44, 0.4)',
            },
            '& .MuiDataGrid-columnHeader.MuiDataGrid-withBorderColor': {
              borderColor: 'white',
            },
            // '& .MuiDataGrid-virtualScrollerContent': {
            //   border: '1px solid rgba(44, 44, 44, 0.4)',
            // },
          },
        },
      },
    },
  },
  csCZ,
);

export default theme;
