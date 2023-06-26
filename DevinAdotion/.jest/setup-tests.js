import '@testing-library/jest-dom';

const mockData = [
    {
        "id": "123",
        "produto": "Ração",
        "quantidade": "30",
        "animal": "Cachorro",
        "categoria": "Adulto"
      },
      {
        "id": "234",
        "produto": "Antiparasitário",
        "quantidade": "10",
        "animal": "Gato",
        "categoria": "Filhote"
      },
]

global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(mockData) })
);