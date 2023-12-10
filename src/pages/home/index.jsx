export default function Home() {
    return (
        <div className="wrapper">
            <div className="selection">

                <div>
                    <div className="flex flex-row gap-5 p-5 justify-between">
                        <div className="text-3xl font-bold">
                            <h> INFORMASI SURAT MENYURAT </h>
                        </div>
                        <div className="flex flex-row justify-end gap-5 ">
                            <input className="rounded-lg border-black border p-2" placeholder="Cari..." />
                            <button className="bg-gray-800 rounded-lg p-2 text-white"> TAMBAH </button>
                        </div>
                    </div>
                    <div className="p-2">
                        <table>
                            <tr>
                                <th className="border-black"> NOMOR SURAT </th>
                                <th> KODE DIVISI </th>
                                <th> PENGIRIM INSTANSI </th>
                                <th> ALAMAT </th>
                                <th> PENERIMA INSTANSI </th>
                                <th> PERIHAL </th>
                                <th> SIFAT SURAT </th>
                                <th> Edit </th>
                                <th> Delete </th>
                            </tr>
                            <tr>
                                <td> Alfreds Futterkiste </td>
                                <td> Maria Anders </td>
                                <td> Germany </td>
                                <td> Placeholder </td>
                                <td> Placeholder </td>
                                <td> Placeholder </td>
                                <td> Placeholder </td>
                                <td> Placeholder </td>
                                <td> Placeholder </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}