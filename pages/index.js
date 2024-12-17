import { useState } from 'react';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = (type) => {
    if (!description || !amount || parseFloat(amount) <= 0) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const transactionAmount = type === 'income' ? parseFloat(amount) : -parseFloat(amount);
    const newTransaction = {
      description,
      amount: transactionAmount,
      time: new Date(),
    };

    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount('');
  };

  const removeTransaction = (index) => {
    const now = new Date();
    const transactionTime = new Date(transactions[index].time);
    const diff = (now - transactionTime) / 1000 / 60; // diferencia en minutos

    if (diff <= 1) {
      setTransactions(transactions.filter((_, i) => i !== index));
    } else {
      alert('No se puede eliminar la transacción después de un minuto.');
    }
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.title}>Think Deep<br />Accounting</h1>
      </div>
      <div style={styles.inputSection}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          <div style={styles.buttonContainer}>
            <button onClick={() => addTransaction('income')} style={styles.circleButton}>+</button>
            <button onClick={() => addTransaction('expense')} style={styles.circleButton}>-</button>
          </div>
        </div>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Descripción</th>
              <th style={styles.th}>Monto (MXN $)</th>
              <th style={styles.th}>Hora</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td style={styles.td}>{transaction.description}</td>
                <td style={styles.td}>{transaction.amount.toFixed(2)}</td>
                <td style={styles.td}>{transaction.time.toLocaleTimeString()}</td>
                <td style={styles.td}>
                  <button onClick={() => removeTransaction(index)} style={styles.deleteButton}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.totalContainer}>
        <h2 style={styles.total}>
          <span>Total</span>
          <div style={styles.verticalSeparator}></div>
          <span style={styles.totalAmount}>MXN ${total.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: '#FFFFFF',
    backgroundColor: '#1a1a1a',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '250px',
    height: '250px',
    marginRight: '100px',
  },
  title: {
    letterSpacing: '-0.05em',
    lineHeight: '1em',
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '24px',
    textAlign: 'left',
  },
  inputSection: {
    backgroundColor: '#2a2a2a',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px auto',
    width: '80%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    border: '1px solid #FFD700',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    width: '80%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  circleButton: {
    width: '40px',
    height: '40px',
    backgroundColor: '#FFD700',
    border: 'none',
    color: '#333333',
    cursor: 'pointer',
    margin: '0 5px',
    borderRadius: '50%',
    fontSize: '20px',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#FF6347',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
  },
  tableContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px auto',
    width: '80%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#444444',
  },
  th: {
    borderBottom: '2px solid #FFD700',
    padding: '10px',
    color: '#FFD700',
    fontWeight: 'normal',
  },
  td: {
    borderBottom: '1px solid #444444',
    padding: '10px',
    fontWeight: 'normal',
  },
  totalContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: '20px',
    padding: '10px',
    margin: '20px auto',
    width: '80%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
  total: {
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
  },
  totalAmount: {
    color: '#FFD700',
    marginLeft: '10px',
    fontWeight: 'normal',
  },
  verticalSeparator: {
    width: '1px',
    height: '20px',
    backgroundColor: '#FFD700',
    margin: '0 10px',
  },
};

styles.circleButton[':hover'] = {
  backgroundColor: '#FFC107',
};

styles.deleteButton[':hover'] = {
  backgroundColor: '#FF4500',
};
