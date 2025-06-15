'use client'

import { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import './style.css';

export default function History() {
    const [history, setHistory] = useState([]);

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
                variant="h6" 
                gutterBottom
                sx={{ 
                    textAlign: 'center',
                    mb: 1
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
                                py: 1
                            }}
                        >
                            <ListItemText
                                primary={`${item.inputValue} ${item.fromCurrency} → ${item.outputValue} ${item.toCurrency}`}
                                secondary={item.timestamp}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem'
                                }}
                                secondaryTypographyProps={{
                                    fontSize: '0.8rem'
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
} 