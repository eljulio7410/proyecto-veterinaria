package com.example.demo.service.imp;

import com.example.demo.dao.MascotaDao;
import com.example.demo.entity.Mascota;
import com.example.demo.service.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MascotaImp implements MascotaService {

    @Autowired
    public MascotaDao dao;


    @Override
    public Mascota crearmascota(Mascota masc) {
        return dao.save(masc);

    }

    @Override
    public List<Mascota> lmascotas() {
        return dao.findAll();
    }

    @Override
    public void eliminarMascota(Long id) {
        dao.deleteById(id);
    }
}
