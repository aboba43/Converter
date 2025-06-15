'use client'

import { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import './style.css';

export default function History() {
    const [history, setHistory] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const loadHistory = () => {
            const savedHistory = JSON.parse(localStorage.getItem('converterHistory')) || [];
            setHistory(savedHistory);
        };

        // Load initial history
        loadHistory();

        // Listen for storage changes
        window.addEventListener('storage', loadHistory);
        window.addEventListener('storage', loadHistory); // For local changes

        return () => {
            window.removeEventListener('storage', loadHistory);
            window.removeEventListener('storage', loadHistory);
        };
    }, []);

    return (
        <div className="history-container">
            <Typography 
                variant={isMobile ? "h6" : "h5"} 
                gutterBottom
                sx={{ 
                    textAlign: isMobile ? 'center' : 'left',
                    mb: isMobile ? 1 : 2
                }}
            >
                Conversion History
            </Typography>
            <div className="history-list">
                <List>
                    {history.map((item, index) => (
                        <ListItem 
                            key={index} 
                            divider
                            sx={{
                                py: isMobile ? 1 : 1.5
                            }}
                        >
                            <ListItemText
                                primary={`${item.inputValue} ${item.fromCurrency} → ${item.outputValue} ${item.toCurrency}`}
                                secondary={item.timestamp}
                                primaryTypographyProps={{
                                    fontSize: isMobile ? '0.9rem' : '1rem'
                                }}
                                secondaryTypographyProps={{
                                    fontSize: isMobile ? '0.8rem' : '0.875rem'
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
} 