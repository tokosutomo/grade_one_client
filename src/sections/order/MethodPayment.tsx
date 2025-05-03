class Method {
  name: string;
  code: string;

  constructor(nameMethod: string, codeMethod: string) {
    this.name = nameMethod;
    this.code = codeMethod;
  }
}

export default function MethodPayment() {
  const methods = [new Method("COD (Cash On Delivery)", "cod")];

  return (
    <div className="p-5">
      <h3 className="font-bold mb-2">Metode Pembayaran</h3>
      {methods.map((method, i) => (
        <div key={i} className="flex items-center">
          <input
            onChange={() => {}}
            checked={method.code === "cod" ? true : false}
            id="default-radio-2"
            type="radio"
            value={method.code}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {method.name}
          </label>
        </div>
      ))}
    </div>
  );
}
