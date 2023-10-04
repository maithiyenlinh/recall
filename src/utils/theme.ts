import {createTheme} from "@mui/material/styles";

// Create a theme instance.
export const theme = createTheme({
    palette: {
        secondary: {
            light: '#F8F9FB',
            main: '#5F6D7E',
            dark: '#E6E9EC',
            contrastText: '#5B5B5B',
        },
        primary: {
            light: '#D1D9E2',
            main: '#2E3646',
            dark: '#000',
        },
        error: {
            main: '#f00',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        button: {
            fontSize: 16,
            lineHeight: 1.5,
            fontWeight: 600,
            color: '#F8F9FB',
            textTransform: 'capitalize',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '9px 38px',
                    '&:disabled': {
                        cursor: 'not-allowed',
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: 15,
                    lineHeight: '22px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    backgroundColor: '#F8F9FB',
                    color: '#5F6D7E',
                },
                root: {
                    minWidth: 300
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: '12px 18px',
                },
                root: {
                    padding: 0,
                    backgroundColor: '#F8F9FB',
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#E6E9EC',
                    borderRadius: 5,
                    border: '1.5px solid #5F6D7E',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: '#5F6D7E',
                    textTransform: 'capitalize',
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    fontSize: 15,
                    lineHeight: '22px',
                    fontWeight: 600,
                    borderRadius: '8px',
                    color: '#5F6D7E',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#fff',
                        background: '#2E3646',
                    }
                }
            }
        }
    }
});
