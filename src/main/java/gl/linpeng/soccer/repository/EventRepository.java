package gl.linpeng.soccer.repository;

import gl.linpeng.soccer.domain.Event;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Event entity.
 */
@SuppressWarnings("unused")
public interface EventRepository extends JpaRepository<Event,Long> {

}
